//
//  User.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import Foundation

struct User: Codable {
    let id: String
    let firstname: String
    let lastname: String
    let gender: String
    var health: CGFloat
    var wisdom: CGFloat
    let avatar: String
}

