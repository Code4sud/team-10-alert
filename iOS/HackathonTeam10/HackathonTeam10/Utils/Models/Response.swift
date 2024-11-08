//
//  Response.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import Foundation


struct Response: Decodable {
    let description: String
    let scoreDescription: String?
    let effectDescription: String?
    let healthPointsImpact: Int?
    let wisePointsImpact: Int?
    let scenarioNodeChildId: String?
}

