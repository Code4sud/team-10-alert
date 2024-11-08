//
//  EndScenario.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct EndScenarioView: View {
    var onClose: () -> Void
    @State private var navigateToMap = false
    
    var body: some View {
        NavigationStack {
            ZStack {
                
                Image("background")
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(height: UIScreen.main.bounds.height * 1.1)
                    .clipped()
                    .blur(radius: 12)
                    

                
                VStack {
                    VStack(spacing: 20){
                        Text("Félicitations")
                            .font(.largeTitle)
                            .fontWeight(.bold)
                            .foregroundColor(Color(.secondary))
                            .shadow( color: Color(.secondary).opacity(0.9), radius: 12)
                            .padding(.top, 20)
                        Text("Tu as terminé le scénario Alerte innondation au lycée Massena. Tu t'en es très bien sorti !")
                            .foregroundColor(.white)
                            .font(.system(size:12, weight: .regular))
                        
                        HStack(spacing:10){
                            Spacer()
                            NavigationLink(
                                destination: MapView(),
                                isActive: $navigateToMap
                            ) {
                                CustomButton(text: "Continuer") {
                                    navigateToMap = true
                                }
                                .padding(.leading,50)
                                Spacer()
                                CustomCircleButton(imageName: "arrow.trianglehead.clockwise.rotate.90") {
                                    navigateToMap = true
                                }
                            }
                        }
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
                }.padding(.horizontal, 30)
                .padding()
            }
            .shadow( color: Color(.secondary).opacity(0.4), radius: 12)
            .padding(.horizontal, 30)
        }
    }
}

#Preview {
    EndScenarioView(){
        
    }
}

