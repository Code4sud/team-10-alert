//
//  Button.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct CustomButton: View {
    
    var text: String
    var action: () -> Void
    
    var body: some View {
        Button(action: action) {
            
            Text(text)
                .font(.system(size: 16, weight: .bold))
                .padding(10)
                .frame(maxWidth: .infinity)
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color(.button))
                )
                .foregroundStyle(.white)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.white, lineWidth: 1)
                )
                .shadow( color: Color(.secondary).opacity(0.4), radius: 12)
            
        }
    }
}

//#Preview {
//    CustomButton(text: "Valider", action : )
//}
