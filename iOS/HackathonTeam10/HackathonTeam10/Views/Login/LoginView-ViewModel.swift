//
//  LoginViewModel.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI


extension LoginView {
    @Observable
    class ViewModel {
        private(set) var userState: UserState = .init()
        
        init() {
            fetchData()
        }
        
        private func fetchData() {
            DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
                self.userState.authState = .authenticated
            }
        }
    }
}
