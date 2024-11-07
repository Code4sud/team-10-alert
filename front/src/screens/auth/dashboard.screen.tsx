import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoMdAdd } from 'react-icons/io';
import { DatePicker } from '@/components/ui/datePicker';
import {
  alertes,
  AlertPower,
  alertPowerMapping,
  AlertType,
} from '@/enums/alert.enum';
import { TiWarning } from 'react-icons/ti';
import { Textarea } from '@/components/ui/textarea';
import DashboardBefore from '@/components/DashboardBefore';
import DashboardDuring from '@/components/DashboardDuring';
import DashboardAfter from '@/components/DashboardAfter';
import { Link } from 'react-router-dom';

const DashboardScreen = () => {
  const [selectedAlertType, setSelectedAlertType] = useState('');
  const [selectedAlertPower, setSelectedAlertPower] = useState('');
  const [alertPowers, setAlertPowers] = useState<AlertPower[]>([]);
  const [tasks, setTasks] = useState(['', '', '', '', '']);
  const [currentDashboard, setCurrentDashboard] = useState('before');

  useEffect(() => {
    if (selectedAlertType && selectedAlertType in alertPowerMapping) {
      setAlertPowers(alertPowerMapping[selectedAlertType as AlertType] || []);
    } else {
      setAlertPowers([]);
    }
  }, [selectedAlertType]);

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
      case 'before':
        return <DashboardBefore />;
      case 'during':
        return <DashboardDuring />;
      case 'after':
        return <DashboardAfter />;
      default:
        return <DashboardBefore />;
    }
  };

  return (
    <div className='p-8 flex-grow'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold text-white'>Dashboard</h1>
        <Dialog>
          <DialogTrigger asChild>
            <div className='flex items-center space-x-4'>
              <Link
                to='/scenarios'
                className='bg-[#262626] text-white px-4 py-1 rounded-md border border-white border-1'
              >
                Mes Scénarios
              </Link>
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
                  <SelectValue placeholder="Sélectionner un type d'alerte" />
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
                    <SelectValue placeholder="Sélectionner la puissance de l'alerte" />
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
                    <DatePicker />
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
                    <IoMdAdd className='mr-2' /> Ajouter une tâche
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
                Cette action ne peut pas être annulée. Veuillez confirmer votre
                choix avant de déclencher l'alerte.
              </DialogDescription>
              <Button
                variant='outline'
                className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'
              >
                <TiWarning /> Déclencher l'alerte
              </Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className='mb-6 flex space-x-4 justify-evenly w-full'>
        <Button
          onClick={() => setCurrentDashboard('before')}
          className={`${
            currentDashboard === 'before' ? 'bg-yellow-500' : 'bg-yellow-400'
          } text-black hover:bg-yellow-300`}
        >
          Avant l'alerte
        </Button>
        <Button
          onClick={() => setCurrentDashboard('during')}
          className={`${
            currentDashboard === 'during' ? 'bg-orange-500' : 'bg-orange-400'
          } text-black hover:bg-orange-300`}
        >
          Pendant l'alerte
        </Button>
        <Button
          onClick={() => setCurrentDashboard('after')}
          className={`${
            currentDashboard === 'after' ? 'bg-green-500' : 'bg-green-400'
          } text-black hover:bg-green-300`}
        >
          Après l'alerte
        </Button>
      </div>

      {renderDashboard()}
    </div>
  );
};

export default DashboardScreen;
