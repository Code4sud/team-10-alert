//
//  ChooseCharacterView.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI
import AVKit
import Combine

struct ChooseCharacterView: View {
    
    @StateObject var viewModel : LoginViewModel

    @State private var selectedIndex = 0
    
    var body: some View {

        ZStack{
            BackgroundView()
            
            VStack{
                RoundedRectangle(cornerRadius: 12)
                    .fill(Color.primary)
                    .frame(width: 300, height: 600)
                    .shadow( color: Color(.secondary), radius: 12)
                    .overlay(
                        VStack {
                            Text("Choisissez votre personnage")
                                .foregroundStyle(Color(.white))
                                .padding(.top, 10)
                            
                            TabView(selection: $selectedIndex) {
                                ForEach(urlList, id: \.self) { url in
                                    LoopingVideo(url: url)
                                        .tag(url)
                                }
                            }.tabViewStyle(PageTabViewStyle(indexDisplayMode: .always))
                                .frame(maxWidth: .infinity)
                                .frame(height: 530)

                            
                        }.frame(maxWidth: 300, maxHeight: 600)
                            .background(Color("video_bg"))
                            .overlay(
                                RoundedRectangle(cornerRadius: 12)
                                    .stroke(Color.white, lineWidth: 1)
                                
                            )
                    )
                Spacer()
                    .frame(height: 32)
                HStack {
                    CustomButton(text: "Valider") {
                        viewModel.currentPage = .map
                        viewModel.chooseCharacter()
                    }
                    .frame(width: 160)
                    .padding(.horizontal, 40)
                }
            }
        }
    }
    
    let urlList = [
        URL(string:"https://oaopkxbulndekhintqrq.supabase.co/storage/v1/object/public/avatars/player%201%20pre.mp4?t=2024-11-06T20%3A24%3A34.155Z")!,
        URL(string:"https://oaopkxbulndekhintqrq.supabase.co/storage/v1/object/public/avatars/player%203%20.mp4?t=2024-11-06T20%3A24%3A59.633Z")!,
        URL(string: "https://oaopkxbulndekhintqrq.supabase.co/storage/v1/object/public/avatars/player%202.mp4?t=2024-11-07T17%3A18%3A58.397Z")!,
        URL(string: "https://oaopkxbulndekhintqrq.supabase.co/storage/v1/object/public/avatars/player%203%20try%202%20done-2.mp4?t=2024-11-07T17%3A19%3A13.358Z")!
    ]
    

}


#Preview {
    // ChooseCharacterView()
}


/*
 VideoPlayer(player: AVPlayer(url: URL(string: "https://oaopkxbulndekhintqrq.supabase.co/storage/v1/object/public/avatars/player%201%20pre.mp4?t=2024-11-06T20%3A24%3A34.155Z")!))
     //.frame(height: 300)
 */

