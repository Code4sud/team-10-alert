//
//  BootstrapView.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//


import SwiftUI

struct BootstrapView: View {
    @State private var vm = ViewModel()
    
    var body: some View {
        Group {
            switch vm.userState.authState {
            case .authenticated:
                GameView()
            case .unauthenticated:
                LoginView()
            case .splash:
                GameView()
            }
        }
    }
}

#Preview() {
    BootstrapView()
}
