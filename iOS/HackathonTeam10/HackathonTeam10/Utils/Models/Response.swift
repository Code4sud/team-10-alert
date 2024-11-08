//
//  Response.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import Foundation


struct Response: Codable {
    let description: String
    let effectDescription: String
    let score: String
    let healthEffect: Int
    let wiseEffect: Int
    let targetQuestionId: String
    let parentQuestionId: String?
}
