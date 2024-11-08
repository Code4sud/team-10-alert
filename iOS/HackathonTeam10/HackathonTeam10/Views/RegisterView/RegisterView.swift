//
//  RegisterView.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI
import NavigationTransitions


struct RegisterView: View {
    
    @StateObject var viewModel : LoginViewModel

    var body: some View {
        
            ZStack {
                BackgroundView()
                
                VStack(alignment: .center) {
                    Text("S’inscrire")
                        .foregroundStyle(.white)
                        .font(.system(size: 32))
                        .bold()
                    
                    Spacer().frame(height: 80)
                    
                    CustomTextField(
                        text:"",
                        placeholder: "Saisissez votre adresse e-mail",
                        title: "Adresse mail"
                    )
                    
                    Spacer().frame(height: 30)
                    
                    CustomTextField(
                        text:"",
                        placeholder: "Saisissez votre mot de passe",
                        title: "Mot de passe",
                        secure: true
                    )
                    
                    Spacer().frame(height: 30)
                    
                    CustomTextField(
                        text:"",
                        placeholder: "Saisissez votre mot de passe",
                        title: "Confirmation du mot de passe",
                        secure: true
                    )
                    
                    Spacer().frame(height: 112)
                    
                    CustomButton(text: "S'inscrire"){
                        viewModel.currentPage = .createProfile
                        viewModel.register()
                    }
                    
                    Spacer().frame(height: 77)
                    
                    Text("Vous avez déjà un compte ? ")
                        .foregroundStyle(.white)
                        .font(.system(size: 14))
                        .padding(.bottom, 4)
                    
                        Text("Connectez-vous ici !")
                            .foregroundStyle(Color(.secondary))
                            .font(.system(size: 16))
                            .bold()
                            .onTapGesture {
                                viewModel.currentPage = .login
                            }
                    
                    
                }.padding(.horizontal, 35)
            }.navigationBarBackButtonHidden(true)
            

    }
}


#Preview {
   // RegisterView()
}
