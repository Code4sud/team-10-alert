//
//  BackgroundView.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI

struct BackgroundView: View {
    
    var body: some View {
        ZStack {
            Image("background")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(height: UIScreen.main.bounds.height * 1.1)
                .clipped()
                .blur(radius: 12)
            
            
            Color.black.opacity(0.5)
                .frame(width: .infinity, height: .infinity)
        }

    }
}
