//
//  ScenarioDetailView.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI

struct ScenarioDetailView: View {
    var onClose: () -> Void
    
    @State private var navigateToGame = false
    
    var body: some View {
        NavigationStack {
            ZStack {
                
                Image("map_bg")
                    .resizable()
                    .scaledToFill()
                    .frame(width: UIScreen.main.bounds.width * 2.0, height: UIScreen.main.bounds.height)
                    .ignoresSafeArea()
                    .clipped()
                    .blur(radius: 10, opaque: true)

                VStack {
                    HStack {
                        Spacer().frame(width: 270)
                        Button(action: {
                            onClose()
                        }) {
                            Image(systemName: "xmark.circle")
                                .resizable()
                                .frame(width: 24, height: 24)
                        }
                        .buttonStyle(PlainButtonStyle())
                    }
                    .padding(.vertical, 13)

                    Image("inondation")
                        .resizable()
                        .scaledToFit()
                        .frame(width: 300)
                        .clipShape(RoundedRectangle(cornerRadius: 15))
                        .overlay(
                            RoundedRectangle(cornerRadius: 15)
                                .stroke(Color.white, lineWidth: 1)
                        )

                    Spacer().frame(height: 30)

                    Text("9 novembre 2025, 17h14\n\nAu Lycée Masséna, l'alerte inondation retentit. La pluie bat de plus en plus fort, les fenêtres tremblent.\n\nDans la classe, l'inquiétude grandit.\n Que ferez vous? Fuir vers l’inconnu ou attendre les secours ?\n\nChaque choix pourrait être crucial... ")
                        .frame(width: 250)
                        .multilineTextAlignment(.center)
                        .font(.system(size: 14))
                        .italic()

                    Spacer().frame(height: 30)

                    NavigationLink(
                        destination: GameView(),
                        isActive: $navigateToGame
                    ) {
                        CustomButton(text: "Commencer") {
                            navigateToGame = true
                        }
                        .frame(width: 300)
                    }
                }
                .foregroundColor(.white)
                .font(.system(size: 12, weight: .regular))
                .padding(.bottom, 50)
                .padding(.horizontal, 20)
                .background(
                    RoundedRectangle(cornerRadius: 15)
                        .fill(Color(.primary))
                        .shadow(color: Color(.secondary), radius: 12)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 15)
                        .stroke(Color.white, lineWidth: 1)
                )
            }.ignoresSafeArea()
        
        }.ignoresSafeArea()
    }
}

#Preview {
    ScenarioDetailView(onClose: { })
}


#Preview {
    ScenarioDetailView {
        
    }
}

