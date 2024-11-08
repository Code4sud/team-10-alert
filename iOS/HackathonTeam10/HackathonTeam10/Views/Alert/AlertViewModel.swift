//
//  AlertViewModel.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 08/11/2024.
//

import SwiftUI

class AlertViewModel: ObservableObject {
        
    @Published var currentPage: AltertPages = AltertPages.alert
    
}

enum AltertPages: Hashable {
    case alert
    case todo
}
