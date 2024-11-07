//
//  HomeView.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct HomeView: View {
    var body: some View {

        VStack {
            CustomTextField(text: "", placeholder: "coucou", title: "Hello")
            
            CustomTextField(text: "", placeholder: "blabla", title: "bla")
            CustomTextField(text: "", placeholder: "saisissez mot de passe", title: "Mot de passe", secure: true)
                .padding(.bottom, 30)
            
            CustomButton(text:"Valider") {
                
            }
        }
        .padding(50)
        .frame(height: .infinity)
        .background(.black)
            
    }
}

#Preview() {
    HomeView()
}
