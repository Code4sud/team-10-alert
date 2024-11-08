//
//  Node.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//
import Foundation

struct Node: Decodable {
    let id: String
    let description: String
    let responses: [Response]
}


