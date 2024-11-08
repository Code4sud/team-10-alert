//
//  Scenario.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import Foundation


struct Scenario: Codable {
    let scenarioId: String
    let initialNode: Node
    let nodes: [Node]
}
