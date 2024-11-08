//
//  FeedbackView.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct FeedbackView: View {
    
    @StateObject var viewModel : AlertViewModel

    @State private var feedbackText: String = ""
    
    var body: some View {
        ZStack {
            VStack {
                VStack(alignment: .center, spacing: 20) {
                    Text("Retour d'expérience")
                        .font(.title2)
                        .fontWeight(.heavy)
                        .foregroundColor(.white)
                        .multilineTextAlignment(.center)
                        .padding(.bottom)
                    
                    Text("Hey ! J'espère que tu vas bien. On voulait prendre de tes nouvelles après ce qui s'est passé. Comment tu te sens aujourd'hui ?")
                        .foregroundColor(.white)
                        .font(.system(size: 14, weight: .regular))
                    
                    ZStack {
                        ClearBackgroundTextEditor(text: $feedbackText, placeholder: "Saisissez votre avis")
                            .frame(height: 250)
                            .overlay(
                                RoundedRectangle(cornerRadius: 12)
                                    .stroke(Color.white, lineWidth: 1)
                            )
                    }
                    
                    CustomButton(text: "Envoyer") {
                        
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
        .shadow(color: Color(.secondary).opacity(0.4), radius: 12)
    }
}

#Preview {
    //FeedbackView()
}

struct ClearBackgroundTextEditor: UIViewRepresentable {
    @Binding var text: String
    var placeholder: String
    
    func makeUIView(context: Context) -> UITextView {
        let textView = UITextView()
        textView.backgroundColor = .clear
        textView.font = UIFont.systemFont(ofSize: 16)
        textView.textColor = UIColor.white
        textView.text = placeholder
        textView.textColor = .gray
        textView.delegate = context.coordinator
        return textView
    }
    
    func updateUIView(_ uiView: UITextView, context: Context) {
        uiView.text = text.isEmpty ? placeholder : text
        uiView.textColor = text.isEmpty ? .gray : .white
    }
    
    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }
    
    class Coordinator: NSObject, UITextViewDelegate {
        var parent: ClearBackgroundTextEditor

        init(_ parent: ClearBackgroundTextEditor) {
            self.parent = parent
        }

        func textViewDidBeginEditing(_ textView: UITextView) {
            if textView.text == parent.placeholder {
                textView.text = ""
                textView.textColor = .white
            }
        }

        func textViewDidEndEditing(_ textView: UITextView) {
            if textView.text.isEmpty {
                textView.text = parent.placeholder
                textView.textColor = .gray
            }
            parent.text = textView.text
        }
        
        func textViewDidChange(_ textView: UITextView) {
            parent.text = textView.text
        }
    }
}

