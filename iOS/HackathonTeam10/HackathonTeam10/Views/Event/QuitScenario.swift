//
//  QuitScenario.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct QuitScenarioView: View {
    var body: some View {
        ZStack {
            VStack {
                VStack(spacing: 20){
                    Text("Attention !")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                        .foregroundColor(Color(.secondary))
                        .shadow( color: Color(.secondary).opacity(0.9), radius: 12)
                        .padding(.top, 20)
                    VStack(spacing:10){
                        Text("En quittant maintenant, vous allez perdre tout votre avancement dans ce scénario. Si vous ne le terminez pas, vous devrez recommencer depuis le début.")
                            .multilineTextAlignment(.center)
                            .foregroundColor(.white)
                            .font(.system(size:12, weight: .regular))
                        Text("Voulez-vous vraiment quitter ?")
                            .multilineTextAlignment(.center)
                            .foregroundColor(.white)
                            .font(.system(size:16, weight: .bold))
                    }
                    
                    HStack(spacing: 10){
                        Spacer()
                        Button(action: {

                        }) {
                            Text("Quitter")
                                .font(.system(size: 16, weight: .bold))
                                .padding(10)
                                .frame(maxWidth: .infinity)
                                .background(
                                    RoundedRectangle(cornerRadius: 12)
                                        .fill(Color(.primary))
                                )
                                .foregroundStyle(.white)
                                .overlay(
                                    RoundedRectangle(cornerRadius: 12)
                                        .stroke(Color.white, lineWidth: 1)
                                )
                        }
                        Spacer()
                        CustomButton(text: "Continuer") {
                            
                        }
                        Spacer()
                    }
                    .padding(.bottom)
                }
                .padding()
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color(.primary))
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.white, lineWidth: 1)
                )
            }
            .padding()
        }
        .shadow( color: Color(.secondary).opacity(0.4), radius: 12)
        
    }
}

#Preview {
    QuitScenarioView()
}


