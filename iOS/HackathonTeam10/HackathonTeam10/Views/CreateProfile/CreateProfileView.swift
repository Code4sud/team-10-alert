//
//  CreateProfileView.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI

struct CreateProfileView: View {
    @State private var viewModel = ViewModel()
    var body: some View {
        ZStack {
            BackgroundView()
            VStack(alignment: .center) {
                Text("Profil")
                    .foregroundStyle(.white)
                    .font(.system(size: 32))
                    .bold()
                Spacer().frame(height: 20)
                CustomTextField(
                    text:"",
                    placeholder: "Saisissez votre Nom",
                    title: "Nom"
                )
                Spacer().frame(height: 20)
                CustomTextField(
                    text:"",
                    placeholder: "Saisissez votre Prénom",
                    title: "Prénom"
                )
                Spacer().frame(height: 20)
                CustomTextField(
                    text:"",
                    placeholder: "Saisissez votre âge",
                    title: "Âge",
                    keyboardType: .numberPad
                )
                Spacer().frame(height: 20)
                CustomTextField(
                    text:"",
                    placeholder: "Saisissez le Numéro de téléphone",
                    title: "Numéro de téléphone",
                    keyboardType: .numberPad
                )
                Spacer().frame(height: 20)
                CustomTextField(
                    text:"",
                    placeholder: "Saisissez le Numéro de téléphone",
                    title: "Numéro de téléphone d'un parent",
                    keyboardType: .numberPad
                )
                Spacer().frame(height: 20)
                CustomTextField(
                    text:"",
                    placeholder: "Saisissez votre code postal",
                    title: "Code postal",
                    keyboardType: .numberPad
                )
                Spacer().frame(height: 38)
                CustomButton(text: "Continuer"){
                    viewModel.createProfileAndNavToHome()
                }
            }.padding(.horizontal, 60)
        }
    }
}

#Preview {
    CreateProfileView()
}
