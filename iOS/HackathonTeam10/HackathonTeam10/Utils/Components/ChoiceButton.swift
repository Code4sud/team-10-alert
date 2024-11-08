//
//  ChoiceButton.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct ChoiceButton: View {
    
    var text: String
    var action: () -> Void
    
    var body: some View {
        Button(action: action) {
            
            Text(text)
                .font(.system(size: 12, weight: .regular))
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
                .frame(maxWidth: .infinity, alignment: .leading)
            
        }
    }
}
