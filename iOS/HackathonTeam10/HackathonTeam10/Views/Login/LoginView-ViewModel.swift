//
//  LoginViewModel.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI

class LoginViewModel: ObservableObject {
        
    @Published var currentPage: Pages = Pages.login

    func login() {
        print("login button tapped")
    }
    
    func register() {
        print("register button tapped")
    }

    func createProfileAndNavToHome() {
        print("create profile and Nav To Home")
    }
    
    func chooseCharacter(){
         print("tapped choose character")
    }

    
}
