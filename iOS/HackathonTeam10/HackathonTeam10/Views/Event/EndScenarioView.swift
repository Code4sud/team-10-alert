//
//  EndScenario.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct EndScenarioView: View {
    var body: some View {
        ZStack {
            VStack {
                VStack(spacing: 20){
                    Text("Félicitations")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                        .foregroundColor(Color(.secondary))
                        .shadow( color: Color(.secondary).opacity(0.9), radius: 12)
                        .padding(.top, 20)
                    Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v")
                        .foregroundColor(.white)
                        .font(.system(size:12, weight: .regular))
                    
                    HStack(spacing:10){
                        Spacer()
                        CustomButton(text: "Continuer") {
                            
                        }
                        .padding(.leading,50)
                        Spacer()
                        CustomCircleButton(imageName: "arrow.trianglehead.clockwise.rotate.90") {
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
            }
            .padding()
        }
        .shadow( color: Color(.secondary).opacity(0.4), radius: 12)
        
    }
}

#Preview {
    EndScenarioView()
}

