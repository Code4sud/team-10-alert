//
//  MapView.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI

struct MapView: View {
    
    @State private var showModale = false

    
    // Tableau des positions pour chaque map_pin
    let pinPositions: [CGPoint] = [
        CGPoint(x: 80, y: 160),
        CGPoint(x: 240, y: 170),
        CGPoint(x: 250, y: 500),
        CGPoint(x: 300, y: 300),
        CGPoint(x: 150, y: 350)
    ]
    
    var body: some View {
        ZStack {
            Image("map_bg")
                .resizable()
                .scaledToFill()
                .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                .clipped()
                .ignoresSafeArea()
            
            ForEach(0..<pinPositions.count, id: \.self) { index in
                Image("map_pin")
                    .position(x: pinPositions[index].x, y: pinPositions[index].y)
                    .onTapGesture {
                        print("map pin click")
                        showModale.toggle()
                    }
            }
            
            
            VStack {
                HStack {
                    Spacer()
                    Image("avatar_face")
                        .padding(.trailing,10)
                }

                Spacer()
                
                
                Text("Choisissez un scénario d'alerte\net commencez l'aventure!")
                    .multilineTextAlignment(.center)
                    .foregroundColor(.white)
                        .font(.system(size:14, weight: .regular))
                        .padding()
                        .background(
                            RoundedRectangle(cornerRadius: 12)
                                .fill(Color(.primary))
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 12)
                                .stroke(Color.white, lineWidth: 1)
                        )
                        .shadow( color: Color(.secondary), radius: 12)
                        .padding(.bottom, 90)

            }
            
            if(showModale) {
                ScenarioDetailView {
                    showModale.toggle()
                }
            }

        }
    }
}



#Preview {
    MapView()
}
