import Alamofire
import SwiftUI

class GameViewModel: ObservableObject {
    
    @Published var currentNode: Node? // Nœud actuel
    @Published var currentUser: User // Utilisateur avec vie et sagesse
    @Published var isAfterEvent: Bool = false // Contrôle l'affichage de AfterEventView
    @Published var selectedResponse: Response?
    @Published var isEndNode: Bool = false
    
    private var scenario: Scenario? // Scénario chargé depuis l'API
    
    init() {
        // Initialise `currentUser` avec des valeurs par défaut
        self.currentUser = User(id: "user1", firstname: "John", lastname: "Doe", gender: "Male", health: 0.5, wisdom: 0.5, avatar: "AvatarImageName")
        loadScenario()
    }
    
    // Chargement du scénario depuis le fichier JSON dans le bundle
    func loadScenario() {
        if let url = Bundle.main.url(forResource: "Scenario", withExtension: "json") {
            do {
                let data = try Data(contentsOf: url)
                let loadedScenario = try JSONDecoder().decode(Scenario.self, from: data)
                self.scenario = loadedScenario
                
                // Utilisation de `first(where:)` pour trouver le nœud initial
                self.currentNode = loadedScenario.scenarioNodes.nodes.first(where: { $0.id == loadedScenario.initialScenarioNodeId })
                checkForEndNode()
                
                if let initialNode = self.currentNode {
                    print("Scénario chargé avec succès, démarrage au nœud initial : \(initialNode.description)")
                } else {
                    print("Nœud initial introuvable dans le scénario.")
                }
            } catch {
                print("Erreur lors du chargement du scénario : \(error)")
            }
        } else {
            print("Scénario JSON introuvable.")
        }
    }
    
    // Sélection d'une réponse et mise à jour de la santé et de la sagesse
    func selectResponse(_ response: Response) {
        selectedResponse = response
        
        // Conversion de `healthPointsImpact` et `wisePointsImpact` en `CGFloat`
        let healthImpact = CGFloat(Double(response.healthPointsImpact ?? 0) ?? 0) / 100
        let wisdomImpact = CGFloat(Double(response.wisePointsImpact ?? 0) ?? 0) / 100
        
        // Mise à jour des points de santé et de sagesse avec des limites entre 0 et 1
        currentUser.health = min(max(currentUser.health + healthImpact, 0), 1.0)
        currentUser.wisdom = min(max(currentUser.wisdom + wisdomImpact, 0), 1.0)
        
        // Navigation vers le nœud cible
        if let targetNode = scenario?.scenarioNodes.nodes.first(where: { $0.id == response.scenarioNodeChildId }) {
            currentNode = targetNode
            isAfterEvent = true
            checkForEndNode()
        }
    }
    
    // Transition au prochain événement
    func proceedToNextEvent() {
        isAfterEvent = false
        selectedResponse = nil
    }
    
    private func checkForEndNode() {
        // Vérifie si le noeud actuel est un nœud de fin (sans réponses)
        if let node = currentNode, node.responses.isEmpty {
            isEndNode = true
        } else {
            isEndNode = false
        }
    }
    
    func closeEndNode() {
        isEndNode = false
    }
}
