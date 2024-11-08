//
//  EventView-ViewModel.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import Foundation
import SwiftUI
import Alamofire


class GameViewModel: ObservableObject {
    
    @Published var currentNode: Node? // Nœud actuel
    @Published var currentUser: User // Utilisateur avec vie et sagesse
    @Published var isAfterEvent: Bool = false // Contrôle l'affichage de AfterEventView
    @Published var selectedResponse: Response?
    
    private var scenario: Scenario? // Scénario chargé depuis JSON
    
    init() {
        self.currentUser = User(id: "user1", firstname: "John", lastname: "Doe", gender: "Male", health: 0.5, wisdom: 0.5, avatar: "AvatarImageName")
        loadScenario()
    }
    
    func loadScenario() {
        if let url = Bundle.main.url(forResource: "Scenario", withExtension: "json") {
            do {
                let data = try Data(contentsOf: url)
                let loadedScenario = try JSONDecoder().decode(Scenario.self, from: data)
                self.scenario = loadedScenario
                self.currentNode = loadedScenario.initialNode
            } catch {
                print("Erreur lors du chargement du scénario : \(error)")
            }
        } else {
            print("Scénario JSON introuvable.")
        }
    }
    
    func selectResponse(_ response: Response) {
        selectedResponse = response
        currentUser.health = min(currentUser.health + CGFloat(response.healthEffect) / 100, 1.0)
        currentUser.wisdom = min(currentUser.wisdom + CGFloat(response.wiseEffect) / 100, 1.0)
        currentUser.health = max(0, currentUser.health)
        currentUser.wisdom = max(0, currentUser.wisdom)
        
        if let targetNode = scenario?.nodes.first(where: { $0.id == response.targetQuestionId }) {
            currentNode = targetNode
            isAfterEvent = true
        }
    }
    
    func proceedToNextEvent() {
        isAfterEvent = false
        selectedResponse = nil
    }
}


