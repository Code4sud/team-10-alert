//
//  Scenario.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import Foundation


struct Scenario: Decodable {
    let id: String
    let name: String
    let description: String
    let imageUrl: String
    let scenarioNodes: ScenarioNodes
    let initialScenarioNodeId: String?
}
