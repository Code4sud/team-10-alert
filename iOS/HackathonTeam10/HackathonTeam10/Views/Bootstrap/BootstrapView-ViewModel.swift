//
//  BootstrpaView-ViewModel.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import Foundation

extension BootstrapView {
    @Observable
    class ViewModel {
        private(set) var userState: UserState = .init()
        
        init() {
            fetchData()
        }
        
        private func fetchData() {
            DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
                self.userState.authState = .unauthenticated
            }
        }
    }
}
