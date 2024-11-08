import {AzureAxios} from '@/api/axios';
import DashboardAfter from '@/components/dashboard/After.dashboard';
import DashboardBefore from '@/components/dashboard/Before.dashboard';
import DashboardDuring from '@/components/dashboard/During.dashboard';
import DashboardHistory from '@/components/dashboard/History.dashboard';
import {Button} from '@/components/ui/button';
import {DatePicker} from '@/components/ui/datePicker';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {Textarea} from '@/components/ui/textarea';
import {alertes, AlertPower, alertPowerMapping, AlertType,} from '@/enums/alert.enum';
import {useEffect, useState} from 'react';
import {IoMdAdd} from 'react-icons/io';
import {TiWarning} from 'react-icons/ti';

const DashboardScreen = () => {
    const [selectedAlertType, setSelectedAlertType] = useState('');
    const [selectedAlertPower, setSelectedAlertPower] = useState('');
    const [alertPowers, setAlertPowers] = useState<AlertPower[]>([]);
    const [tasks, setTasks] = useState(['', '', '', '', '']);
    const [currentDashboard, setCurrentDashboard] = useState('history');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDateDialogOpen, setIsDateDialogOpen] = useState(false);
    const [alertLaunched, setAlertLaunched] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectDateAlert, setSelectDateAlert] = useState<string | null>(null);
    const [dashboardPeriod, setDashboardPeriod] = useState<string>('');
    const availableDates = [
        {date: '12/09/2024', catastrophe: 'Inondation'},
        {date: '23/05/2025', catastrophe: 'Forte pluie'},
        {date: '15/04/2024', catastrophe: 'Forte pluie'},
        {date: '23/01/2024', catastrophe: 'Tremblement de terre'}
    ];


    useEffect(() => {
        if (selectedAlertType && selectedAlertType in alertPowerMapping) {
            setAlertPowers(alertPowerMapping[selectedAlertType as AlertType] || []);
        } else {
            setAlertPowers([]);
        }
    }, [selectedAlertType]);

    useEffect(() => {
        if (alertLaunched && selectedDate) {
            const timer = setInterval(() => {
                if (new Date() >= new Date(selectedDate)) {
                    setAlertLaunched(false);
                    clearInterval(timer);
                }
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [alertLaunched, selectedDate]);

    const addTask = () => {
        setTasks([...tasks, '']);
    };

    const updateTask = (index: number, value: string) => {
        const newTasks = [...tasks];
        newTasks[index] = value;
        setTasks(newTasks);
    };

    const renderDashboard = () => {
        switch (currentDashboard) {
            case 'history':
                return <DashboardHistory/>;
            case 'before':
                return <DashboardBefore/>;
            case 'during':
                return <DashboardDuring/>;
            case 'after':
                return <DashboardAfter/>;
            default:
                return <DashboardHistory/>;
        }
    };
    console.log(tasks);
    const fetchUsers = async () => {
        try {
            const response = await AzureAxios.get('/users');
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
            return [];
        }
    };

    const handleLaunchAlert = async () => {
        try {
            // Créer la vigilance
            const vigilanceResponse = await AzureAxios.post('/vigilance/create-vigilance', {
                alertType: selectedAlertType,
                vigilanceType: selectedAlertPower,
                alertStartDate: selectDateAlert,
            });

            const vigilanceId = vigilanceResponse.data.id;
            const users = await fetchUsers();

            // Créer les tâches de vigilance
            for (const task of tasks) {
                if (task.trim()) {
                    const vigilanceTodoResponse = await AzureAxios.post('/vigilance/create-vigilance-todo', {
                        task: task,
                    });

                    const vigilanceTodoId = vigilanceTodoResponse.data.id;

                    // Créer une entrée UserVigilanceTodo pour chaque utilisateur
                    for (const user of users) {
                        await AzureAxios.post('/vigilance/create-user-vigilance-todo', {
                            userId: user.id,
                            vigilanceId: vigilanceId,
                            vigilanceTodoId: vigilanceTodoId,
                            isChecked: false,
                            completionDate: null,
                        });
                    }
                }
            }

            setAlertLaunched(true);
            setIsDialogOpen(false);
        } catch (error) {
            console.error("Erreur lors du lancement de l'alerte:", error);
            alert("Une erreur est survenue lors du lancement de l'alerte.");
        }
    };

    const handleDateSelect = (date: string) => {
        setSelectedDate(date);
        setIsDateDialogOpen(false);
        if (dashboardPeriod === 'before') setCurrentDashboard('before');
        else if (dashboardPeriod === 'during') setCurrentDashboard('during');
        else if (dashboardPeriod === 'after') setCurrentDashboard('after');
    };

    const openDashboardModal = (period: string) => {
        setDashboardPeriod(period);
        setIsDateDialogOpen(true);
    };

    console.log(alertPowers);
    console.log(selectedAlertPower);
    return (
        <div className='p-8 min-h-screen flex-grow bg-[#203D4E] rounded-xl'>
            {alertLaunched && (
                <p className='bg-black border border-red-600 border-1 text-red-600 px-4 py-2 rounded-md mb-6'>
                    Une alerte a été lancée et sera active jusqu'au{' '}
                    {selectedDate?.toLocaleString()}
                </p>
            )}

            <div className='mb-6 flex space-x-4 justify-evenly w-full'>
                <Button
                    onClick={() => setCurrentDashboard('history')}
                    className={`${
                        currentDashboard === 'history' ? 'bg-blue-400' : 'bg-white border-2 border-blue-400'
                    } text-black hover:bg-blue-300`}
                >
                    Historique des alertes
                </Button>
                <Button
                    onClick={() => openDashboardModal('before')}
                    className={`${
                        currentDashboard === 'before' ? 'bg-yellow-400' : 'bg-white border-2 border-yellow-400'
                    } text-black hover:bg-yellow-300`}
                >
                    Avant l'alerte
                </Button>
                <Button
                    onClick={() => openDashboardModal('during')}
                    className={`${
                        currentDashboard === 'during' ? 'bg-orange-400' : 'bg-white border-2 border-orange-400'
                    } text-black hover:bg-orange-300`}
                >
                    Pendant l'alerte
                </Button>
                <Button
                    onClick={() => openDashboardModal('after')}
                    className={`${
                        currentDashboard === 'after' ? 'bg-green-400' : 'bg-white border-2 border-green-400'
                    } text-black hover:bg-green-300`}
                >
                    Après l'alerte
                </Button>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <div className='flex items-center space-x-4'>
                                    <Button className='bg-red-500 hover:bg-red-600 text-white px-4 py-4 rounded-md'>
                                        Déclencher une alerte
                                    </Button>
                                </div>
                            </DialogTrigger>
                            <DialogContent className='sm:max-w-[825px]'>
                                <DialogHeader>
                                    <DialogTitle className='text-2xl font-bold mb-4'>
                                        Quel type d'alerte souhaitez-vous déclencher ?
                                    </DialogTitle>
                                    <Select onValueChange={setSelectedAlertType}>
                                        <SelectTrigger className='w-full mb-4'>
                                            <SelectValue placeholder="Sélectionner un type d'alerte"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Type d'alerte</SelectLabel>
                                                {alertes.map((alerte) => (
                                                    <SelectItem key={alerte.id} value={alerte.id}>
                                                        {alerte.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {selectedAlertType && alertPowers.length > 0 && (
                                        <Select onValueChange={setSelectedAlertPower}>
                                            <SelectTrigger className='w-full mb-4'>
                                                <SelectValue placeholder="Sélectionner la puissance de l'alerte"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Puissance de l'alerte</SelectLabel>
                                                    {alertPowers.map((power) => (
                                                        <SelectItem key={power} value={power}>
                                                            {power}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                    {selectedAlertType && selectedAlertPower && (
                                        <div className='mt-4'>
                                            <div className='mb-4'>
                                                <label className='block text-sm font-medium mb-1'>
                                                    Date de l'alerte
                                                </label>
                                                <DatePicker
                                                    onChange={(date) => setSelectDateAlert(date?.toLocaleDateString || null)}
                                                />
                                            </div>
                                            <label className='block text-sm font-medium mb-2'>
                                                To Do List à faire avant/pendant l'alerte
                                            </label>
                                            {tasks.map((task, index) => (
                                                <Input
                                                    key={index}
                                                    placeholder={`Tâche ${index + 1}`}
                                                    value={task}
                                                    onChange={(e) => updateTask(index, e.target.value)}
                                                    className='mb-2'
                                                />
                                            ))}
                                            <Button
                                                onClick={addTask}
                                                variant='outline'
                                                size='sm'
                                                className='mt-2'
                                            >
                                                <IoMdAdd className='mr-2'/> Ajouter une tâche
                                            </Button>
                                        </div>
                                    )}
                                    <Textarea
                                        id='comment'
                                        name='comment'
                                        rows={4}
                                        cols={50}
                                        aria-multiline='true'
                                        placeholder='Ajouter un commentaire (Facultatif)'
                                        className='bg-gray-300 rounded-md p-2'
                                    ></Textarea>
                                    <DialogDescription className='mt-4 text-sm text-gray-500 text-center'>
                                        Cette action ne peut pas être annulée. Veuillez confirmer
                                        votre choix avant de déclencher l'alerte.
                                    </DialogDescription>
                                    <Button
                                        variant='outline'
                                        className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'
                                        onClick={handleLaunchAlert}
                                    >
                                        <TiWarning/> Déclencher l'alerte
                                    </Button>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Dialog open={isDateDialogOpen} onOpenChange={setIsDateDialogOpen}>
                        <DialogTrigger asChild/>
                        <DialogContent className="sm:max-w-[825px]">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold mb-4">Sélectionner la période de
                                    l'événement</DialogTitle>
                                <div className="mb-4">
                                    <p className="text-sm">Choisissez une date pour l'événement {dashboardPeriod} :</p>
                                    <Select onValueChange={handleDateSelect}>
                                        <SelectTrigger className="w-full mt-2">
                                            <SelectValue placeholder="Sélectionner une date"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Dates disponibles</SelectLabel>
                                                {availableDates.map((event) => (
                                                    <SelectItem key={event.date} value={event.date}>
                                                        {event.date} - {event.catastrophe}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            {renderDashboard()}
        </div>
    );
};

export default DashboardScreen;
