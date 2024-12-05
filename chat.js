 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
  
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, how can I assist you with first aid today?";
    } else if (input.includes("how are you")) {
      output = "I'm here to help you with first aid information.";
    } else if (input.includes("what is your name")||input.includes("who are you")) {
      output = "My name is DR chat, your first-aid assistant.";
    } else if (input.includes("what can you do")) {
      output = "I can provide first-aid tips and guidance for common injuries or issues. Remember, in case of an emergency, seek professional help.";
    } else if (input.includes("burn (minor)")) {
      output = "For minor burns, first cool the burn under cold (not icy) running water for at least 10 minutes. Gently clean the area with mild soap and water, then cover it with a sterile, non-stick bandage. Avoid popping blisters, and if pain persists, you can take over-the-counter pain relievers. Seek medical attention if the burn worsens or shows signs of infection";
    } else if (input.includes("burn (severe)")) {
      output = "For severe burns, immediately call emergency services. While waiting for help, remove the person from the source of the burn if safe to do so. Do not remove burned clothing stuck to the skin, but cover the burn with a clean, non-stick cloth or dressing. Keep the person warm and monitor for signs of shock, such as rapid breathing or a weak pulse. Avoid applying ice or ointments to severe burns.";
    } else if (input.includes("cut (minor)")) {
      output = "For a minor cut, clean the wound gently with water and mild soap, then apply an antiseptic to prevent infection. Use a sterile bandage or gauze to cover the cut, keeping it clean and dry. Apply pressure with a clean cloth to stop any bleeding, and change the dressing regularly. Seek medical attention if the cut is deep, won't stop bleeding, or shows signs of infection.";
    } else if (input.includes("cut (deep)")|| input.includes("bleeding")) {
      output = "For a deep or heavily bleeding cut, apply firm pressure to the wound with a clean cloth or bandage to control bleeding. If bleeding doesn't stop, elevate the area above the heart and apply more pressure. Avoid removing any embedded objects; instead, stabilize them in place. Seek emergency medical help immediately, as deep cuts may require stitches or further treatment.";
    } else if (input.includes("nosebleed")) {
      output = "To treat a nosebleed, have the person sit upright and lean slightly forward to prevent blood from flowing down the throat. Pinch the nostrils together firmly and breathe through the mouth for about 10-15 minutes. Apply a cold compress to the back of the neck or the nose to help constrict blood vessels. If bleeding persists after 20 minutes, seek medical attention. Avoid picking or blowing the nose afterward.";
    } else if (input.includes("choking (adult)")) {
      output = "For choking, encourage the person to cough if they can. If they can't cough or breathe, perform the Heimlich maneuver: stand behind the person, place your hands above their navel, and thrust inward and upward. If the person becomes unconscious, begin CPR and check the mouth for the object after each set of chest compressions. Seek immediate medical help if the object is not dislodged.";
    } else if (input.includes("choking (infant)")) {
      output = "For choking, encourage the person to cough if they can. If they can't cough or breathe, perform the Heimlich maneuver: stand behind the person, place your hands above their navel, and thrust inward and upward. If the person becomes unconscious, begin CPR and check the mouth for the object after each set of chest compressions. Seek immediate medical help if the object is not dislodged.";
    } else if (input.includes("heart attack")) {
      output = "If someone is having a heart attack, call emergency services immediately. Have the person sit down and remain calm, and encourage them to chew and swallow an aspirin (if they aren't allergic) to help thin the blood. If they become unconscious and stop breathing, start CPR, focusing on chest compressions. Keep the person warm and monitor their condition until help arrives. Time is critical—seek medical assistance without delay.";
    } else if (input.includes("stroke symptoms")) {
      output = "If someone shows signs of a stroke, such as sudden numbness or weakness on one side of the body, confusion, difficulty speaking, or severe headache, call emergency services immediately. Keep the person calm and still, and do not give them food, drink, or medication. Note the time the symptoms began, as it can help medical professionals with treatment. Early intervention is crucial—seek medical help without delay.";
    } else if (input.includes("poisoning")) {
      output = "In case of poisoning, immediately call Poison Control or emergency services for guidance. If the person is conscious and alert, try to determine the poison and follow specific instructions (e.g., induce vomiting or give water). Do not induce vomiting unless instructed, as it can worsen some types of poisoning. If the person is unconscious or having trouble breathing, do not attempt to give anything by mouth and perform CPR if necessary. Time is crucial—get professional help right away.";
    } else if (input.includes("bee sting")) {
      output = "For a bee sting, remove the stinger by gently scraping it out with a flat object like a credit card—avoid pinching it. Clean the area with soap and water, then apply a cold compress to reduce swelling and pain. Take over-the-counter pain relievers or antihistamines if needed. Seek medical attention if there are signs of an allergic reaction, such as difficulty breathing, swelling around the face, or dizziness.";
    } else if (input.includes("snake bite")) {
      output = "For a snake bite, stay calm and call emergency services immediately. Keep the affected limb immobilized and below heart level to slow the spread of venom. Avoid washing the bite area, as it can help preserve evidence for identification. Do not try to suck out the venom or apply a tourniquet. If possible, note the snake's color and shape for accurate identification, but do not attempt to capture it.";
    } else if (input.includes("seizure")) {
      output = "During a seizure, stay calm and protect the person from injury by clearing the area of sharp objects. Gently guide them to the ground and place a soft cushion or cloth under their head. Do not try to restrain their movements or put anything in their mouth. Time the seizure, and if it lasts more than 5 minutes or if another seizure follows, call emergency services. Afterward, stay with the person as they regain awareness and offer reassurance.";
    } else if (input.includes("sprain")) {
      output = "For a sprain, immediately apply the R.I.C.E. method: Rest the injured area, Ice it to reduce swelling, Compress with an elastic bandage, and Elevate it above heart level. Avoid putting weight on the injured joint, and take over-the-counter pain relievers if necessary. If swelling or pain persists, or if there's difficulty moving the joint, seek medical attention for a proper diagnosis.";
    } else if (input.includes("fracture")) {
      output = "For a fracture, immobilize the injured area by splinting it with a sturdy object, ensuring it's secure but not too tight. Avoid moving the person or the injured limb unless absolutely necessary. Apply ice to reduce swelling and pain, but do not place it directly on the skin. Seek emergency medical help immediately, as fractures may require professional treatment like realignment or a cast.";
    } else if (input.includes("fainting")) {
      output = "If someone faints, gently lower them to the ground and elevate their legs to improve blood flow to the brain. Check for breathing and pulse; if absent, begin CPR. Once they regain consciousness, keep them lying down for a few minutes before helping them sit up slowly. Encourage them to drink water if they’re alert. Seek medical attention if the fainting episode is unexplained or if there are other symptoms like chest pain or confusion.";
    } else if (input.includes("diabetic emergency")) {
      output = "For a diabetic emergency, if the person is conscious and able to swallow, give them a quick source of sugar, such as fruit juice, glucose tablets, or regular soda. If they're unconscious, do not give them anything by mouth. Call emergency services immediately if symptoms of hypoglycemia (low blood sugar) or hyperglycemia (high blood sugar) are severe, or if the person doesn't improve after consuming sugar. Keep monitoring their condition until help arrives.";
    } else if (input.includes("allergic reaction (minor)")) {
      output = "For an allergic reaction, if the person has a known severe allergy and an epinephrine auto-injector (EpiPen), administer it immediately. Keep the person calm and seated, and call emergency services right away. If symptoms worsen or there’s difficulty breathing, assist with further doses of epinephrine as needed. For mild reactions, antihistamines may help, but seek medical attention if there's swelling, wheezing, or other severe symptoms.";
    } else if (input.includes("anaphylaxis")) {
      output = "For anaphylaxis, immediately administer an epinephrine injection (EpiPen) if available. Call emergency services right away, even if symptoms improve after the injection. Keep the person lying down with their legs elevated, unless they are having trouble breathing, in which case they should sit up. If the person doesn’t improve or symptoms return, a second dose of epinephrine may be needed. Do not delay—anaphylaxis is a medical emergency.";
    } else if (input.includes("asthma attack")) {
      output = "During an asthma attack, have the person sit upright and use their inhaler (bronchodilator) as prescribed. Encourage slow, deep breaths to help open the airways. If the inhaler doesn’t relieve symptoms after 5-10 minutes, seek emergency medical help. If the person is unable to speak, is gasping for breath, or shows signs of worsening distress, call 911 immediately. Keep the person calm and monitor their condition until help arrives.";
    } else if (input.includes("heat exhaustion")) {
      output = "For heat exhaustion, move the person to a cooler place and have them lie down with their legs elevated. Offer small sips of cool water or an electrolyte drink, but avoid giving large amounts at once. Apply cool, damp cloths to their skin and fan them to help lower their body temperature. If symptoms worsen or the person becomes confused, faint, or stops sweating, seek immediate medical help, as it may progress to heatstroke.";
    } else if (input.includes("heatstroke")) {
      output = "For heatstroke, call emergency services immediately, as it’s a life-threatening condition. Move the person to a cool area and remove excess clothing. Try to cool their body quickly by applying cool water to the skin, fanning them, or using ice packs on the armpits, neck, and groin. Do not give them fluids if they are unconscious or confused. Continue cooling efforts while awaiting medical assistance.";
    } else if (input.includes("hypothermia")) {
      output = "For hyperthermia, move the person to a cooler environment immediately and remove excess clothing. Begin cooling the body with cool (not cold) water, applying wet cloths or using fans to increase airflow. Offer small sips of water or electrolyte drinks if the person is conscious and alert. Monitor for signs of severe heatstroke, like confusion or unconsciousness, and seek emergency medical help right away if they worsen. Rapid cooling and hydration are key to preventing further complications.";
    } else if (input.includes("sunburn")) {
      output = "For sunburn, cool the skin with a cool (not cold) bath or a damp cloth to soothe the pain. Apply aloe vera gel or over-the-counter hydrocortisone cream to reduce inflammation and moisturize the skin. Drink plenty of water to stay hydrated and avoid further sun exposure. Avoid tight clothing on the affected areas and do not pop blisters if they form. Seek medical attention if the sunburn is severe, blisters cover large areas, or if there are signs of infection.";
    } else if (input.includes("chemical burn")) {
      output = "For a chemical burn, immediately remove any contaminated clothing and rinse the affected area with plenty of cool running water for at least 10-20 minutes to dilute and remove the chemical. Avoid using neutralizing agents unless directed by a professional. Cover the burn with a clean, non-stick bandage and avoid touching or scratching the area. Seek immediate medical attention, especially if the burn is severe or involves the eyes, face, or large areas of the body.";
    } else if (input.includes("eye injury (foreign object)")) {
      output = "For a foreign body in the eye, do not rub the eye, as this can cause further irritation. Flush the eye gently with clean water or saline solution to remove the object. If the object is visible and not embedded, try to remove it with a sterile swab or cloth, but avoid using sharp objects. If the foreign body is not easily removed or if there's persistent pain, redness, or vision changes, seek medical attention immediately.";
    } else if (input.includes("eye injury (chemical exposure)")) {
      output = "For a chemical eye injury, immediately flush the eye with clean, lukewarm water or saline for at least 15-20 minutes, keeping the eyelids open to ensure thorough rinsing. Avoid using any neutralizing chemicals unless directed by a medical professional. Remove contact lenses if present, but do not delay rinsing. After flushing, seek emergency medical help as chemical exposure can cause serious damage to the eye.";
    } else if (input.includes("blisters")) {
      output = "For blisters, clean the area gently with soap and water. If the blister is intact, avoid popping it to reduce infection risk. If it bursts, apply an antibiotic ointment and cover it with a sterile bandage. Keep the blister clean and dry, and change the bandage regularly until it heals.";
    } else if (input.includes("insect bite")) {
      output = "For insect bites, clean the area with soap and water to prevent infection. Apply a cold compress to reduce swelling and itching. Use over-the-counter hydrocortisone cream or antihistamines to alleviate itching and discomfort. If the bite shows signs of infection or an allergic reaction (e.g., difficulty breathing), seek medical attention immediately.";
    } else if (input.includes("food allergy")|| input.includes("food poisoning")) {
      output = "For food poisoning, stay hydrated by sipping water or oral rehydration solutions to replace lost fluids. Rest and avoid solid foods until symptoms subside. If symptoms like severe vomiting, diarrhea, or dehydration persist, seek medical help. For a food allergy, take an antihistamine if mild symptoms occur, or administer an epinephrine injection (EpiPen) for severe reactions, and seek emergency medical care immediately.";
    } else if (input.includes("concussion")) {
      output = "If a concussion is suspected, keep the person still and calm, and avoid any physical activity. Monitor for symptoms like confusion, dizziness, or loss of consciousness. Apply a cold compress to reduce swelling if there’s a head injury. Seek immediate medical attention for a full evaluation, especially if symptoms worsen or the person becomes drowsy, disoriented, or unresponsive. Avoid letting the person sleep until cleared by a healthcare provider.";
    } else if (input.includes("hyperventilation")) {
      output = "For hyperventilation, encourage the person to breathe slowly and deeply into a paper bag or cupped hands to help regulate their breathing. Calmly reassure them to reduce anxiety. Have them inhale through the nose and exhale through the mouth, aiming for a slower rhythm. If symptoms persist or worsen, or if they become faint or confused, seek medical attention immediately.";
    } else if (input.includes("drowning")) {
      output = "For drowning, immediately call for emergency help and get the person out of the water if safe to do so. Check for breathing and pulse—if absent, begin CPR (chest compressions and rescue breaths) right away. If the person is breathing but unresponsive, place them in the recovery position and monitor their airway. Keep them warm and continue to observe for any signs of complications until medical help arrives.";
    } else if (input.includes("electric shock")) {
      output = "Don’t touch the person until power is off; seek emergency help.";
    } else if (input.includes("head injury")) {
      output = "For a head injury, keep the person still and calm, and assess for signs of concussion, such as confusion or dizziness. Apply a cold compress to reduce swelling if there is a visible bump or bruise. Avoid moving the person, especially if they’re unconscious, and seek emergency medical help immediately. If there’s bleeding, gently apply pressure with a clean cloth, but avoid pressing directly on any skull fractures.";
    } else if (input.includes("ear infection")) {
      output = "For an ear infection, keep the ear dry and avoid inserting anything into the ear canal. Apply a warm compress to the outside of the ear to help relieve pain. Over-the-counter pain relievers like ibuprofen or acetaminophen can help manage discomfort. If symptoms persist, worsen, or are accompanied by fever, hearing loss, or drainage, seek medical attention for proper treatment.";
    } else if (input.includes("toothache")) {
      output = "For a toothache, rinse your mouth with warm saltwater to help reduce swelling and clean the area. Apply a cold compress to the outside of your cheek to alleviate pain and swelling. Over-the-counter pain relievers like ibuprofen can help manage discomfort. Avoid placing aspirin directly on the tooth, and if the pain persists, seek dental care as soon as possible to prevent further issues.";
    } else if (input.includes("lost tooth")) {
      output = "If a tooth is knocked out, handle it by the crown (not the root) and rinse it gently with water, avoiding scrubbing. Try to place the tooth back into the socket, or keep it in a cup of milk or saline solution to preserve it. Get to a dentist immediately—reimplantation is most successful if done within an hour. If you can't see a dentist quickly, go to the emergency room for care.";
    } else if (input.includes("back pain (acute)")) {
      output = "For back pain, rest in a comfortable position and avoid activities that may aggravate the pain. Apply a cold compress for the first 48 hours to reduce inflammation, followed by a warm compress to relax muscles. Over-the-counter pain relievers like ibuprofen or acetaminophen can help manage discomfort. Avoid prolonged bed rest, as gentle movement and stretching can aid recovery. If pain persists or is severe, seek medical advice for further evaluation.";
    } else if (input.includes("muscle cramps")) {
      output = "For muscle cramps, gently stretch the affected muscle and massage it to help release the tension. Apply a warm compress or heating pad to relax the muscle. Drink water or an electrolyte solution if dehydration may be a factor. If cramps are frequent, ensure you're getting enough potassium, calcium, and magnesium in your diet. If the cramp persists or is unusually painful, consult a healthcare provider.";
    } else if (input.includes("neck pain")) {
      output = "For neck pain, rest in a neutral position and avoid sudden movements that could aggravate the pain. Apply a cold compress for the first 24–48 hours to reduce swelling, followed by a warm compress to relax tense muscles. Over-the-counter pain relievers like ibuprofen or acetaminophen can help manage discomfort. Gently stretch or perform neck exercises if comfortable, but avoid strenuous activity. If pain persists or worsens, seek medical attention to rule out serious issues.";
    } else if (input.includes("panic attack")) {
      output = "For a panic attack, encourage the person to focus on slow, deep breathing—inhale through the nose for 4 seconds, hold for 4 seconds, and exhale slowly for 6 seconds. Reassure them that the attack will pass and help them find a quiet, calm space. Encourage grounding techniques, like focusing on physical sensations (e.g., holding an object). If the symptoms don't subside or recur frequently, seek professional help for further evaluation and support.";
    } else if (input.includes("ear bleeding")) {
      output = "If there’s bleeding from the ear, keep the person calm and have them sit up to prevent blood from flowing deeper into the ear canal. Gently apply a clean cloth or sterile gauze around the outer ear to catch any blood—avoid inserting anything into the ear. If bleeding is persistent or accompanied by pain, dizziness, or hearing loss, seek medical attention immediately. Do not attempt to remove foreign objects from the ear or treat deeper injuries on your own.";
    } else if (input.includes("eye swelling")) {
      output = "For eye swelling, apply a cold compress or an ice pack wrapped in a cloth to the affected area for 10–15 minutes to reduce inflammation. Keep the head elevated to minimize fluid buildup. Avoid rubbing the eye, as it can worsen the irritation or cause further injury. If swelling persists, is accompanied by pain, vision changes, or discharge, seek medical attention for a thorough evaluation.";
    } else if (input.includes("splinter")) {
      output = "To remove a splinter, clean the area with soap and water. Use clean tweezers to gently pull the splinter out in the direction it entered. If the splinter is deeply embedded, use a sterilized needle to carefully lift it out before removing it with tweezers. After removal, clean the area again, apply an antiseptic, and cover with a bandage to prevent infection. If the splinter cannot be removed easily or becomes infected, seek medical help.";
    } else if (input.includes("fish hook injury")) {
      output = "For a fishhook injury, do not try to remove the hook by pulling it out directly, as it could cause more damage. If the hook is embedded in soft tissue, you can use the string-pull method: push the hook through the skin and cut the barb off with pliers, then pull the rest of the hook out. Clean the wound with water and apply antiseptic to prevent infection. Seek medical attention for deep or complex injuries, or if the hook is deeply embedded and difficult to remove.";
    } else if (input.includes("dog bite")) {
      output = "For a dog bite, clean the wound immediately with soap and water to reduce the risk of infection. Apply pressure with a clean cloth to stop any bleeding. Apply an antiseptic and cover the bite with a sterile bandage. Seek medical attention, especially if the bite is deep, there are signs of infection, or the dog’s vaccination status is unknown. You may need a tetanus shot or rabies treatment depending on the severity and circumstances.";
    } else if (input.includes("puncture wound")) {
      output = "For a puncture wound, clean the area gently with soap and water to remove dirt and debris. Apply pressure with a clean cloth to stop any bleeding. After cleaning, apply an antiseptic and cover the wound with a sterile bandage. If the wound is deep, caused by a dirty object, or if there's excessive bleeding, seek medical attention immediately. Tetanus shots may be needed for certain puncture wounds, especially if caused by rusty or contaminated objects.";
    } else if (input.includes("laceration")) {
      output = "For a laceration, clean the wound gently with soap and water to remove dirt and debris. Apply direct pressure with a clean cloth or sterile gauze to stop bleeding. If the cut is deep or gaping, gently bring the edges together and cover with a sterile bandage. Seek medical attention if the wound is large, doesn't stop bleeding after 10 minutes, or shows signs of infection, like redness or pus. You may need stitches, tetanus shot, or further treatment depending on the severity.";
    } else if (input.includes("fever")|| input.includes("cold")|| input.includes("cough")) {
      output = "For fever, cold, and cough, encourage rest and plenty of fluids to stay hydrated. Use over-the-counter medications like acetaminophen or ibuprofen to reduce fever and ease body aches. For a cough, honey or throat lozenges may provide relief, and a humidifier can help ease congestion. Avoid spreading germs by covering the mouth when coughing and washing hands frequently. If symptoms persist for more than a few days, or if there’s difficulty breathing or chest pain, seek medical attention.";
    } else {
      output = "Sorry, I don’t understand that. For first aid help, try asking about specific injuries like 'burns', 'cuts', or 'choking'.";
    }
  
    return output;
  }
  

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });