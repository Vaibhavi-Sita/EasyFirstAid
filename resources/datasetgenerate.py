import pandas as pd
import random

# Categories and metadata
categories = [
    "Bleeding and Wounds",
    "Burns and Scalds",
    "Head Injuries",
    "Fractures and Sprains",
    "Fainting and Unconsciousness",
    "Breathing Difficulties",
    "Chest Pain and Heart Attack",
    "Heatstroke and Hypothermia",
    "Poisoning",
    "Insect Bites and Stings",
    "Fever and Illness",
    "Electrical Injuries",
    "Choking",
    "Stroke",
    "Seizures",
    "Minor Injuries (Cuts, Scrapes, Bruises)",
    "Allergic Reactions (Anaphylaxis)",
    "Heat Exhaustion",
    "Frostbite",
    "Snake Bites",
]

category_urls = {
    "Bleeding and Wounds": "https://www.mayoclinic.org/first-aid/first-aid-severe-bleeding",
    "Burns and Scalds": "https://www.mayoclinic.org/first-aid/first-aid-burns",
    "Head Injuries": "https://www.mayoclinic.org/first-aid/first-aid-head-trauma",
    "Fractures and Sprains": "https://www.mayoclinic.org/first-aid/first-aid-fractures",
    "Fainting and Unconsciousness": "https://www.mayoclinic.org/first-aid/first-aid-fainting",
    "Breathing Difficulties": "https://www.redcross.org/first-aid/breathing",
    "Chest Pain and Heart Attack": "https://www.mayoclinic.org/first-aid/first-aid-heart-attack",
    "Heatstroke and Hypothermia": "https://www.mayoclinic.org/first-aid/first-aid-heatstroke",
    "Poisoning": "https://www.mayoclinic.org/first-aid/first-aid-poisoning",
    "Insect Bites and Stings": "https://www.mayoclinic.org/first-aid/first-aid-bites-stings",
    "Fever and Illness": "https://www.mayoclinic.org/first-aid/first-aid-fever",
    "Electrical Injuries": "https://www.mayoclinic.org/first-aid/first-aid-electrical-shock",
    "Choking": "https://www.mayoclinic.org/first-aid/first-aid-choking",
    "Stroke": "https://www.mayoclinic.org/first-aid/first-aid-stroke",
    "Seizures": "https://www.mayoclinic.org/first-aid/first-aid-seizures",
    "Minor Injuries (Cuts, Scrapes, Bruises)": "https://www.mayoclinic.org/first-aid/first-aid-cuts",
    "Allergic Reactions (Anaphylaxis)": "https://www.mayoclinic.org/first-aid/first-aid-anaphylaxis",
    "Heat Exhaustion": "https://www.mayoclinic.org/first-aid/first-aid-heat-exhaustion",
    "Frostbite": "https://www.mayoclinic.org/first-aid/first-aid-frostbite",
    "Snake Bites": "https://www.mayoclinic.org/first-aid/first-aid-snake-bites",
}

# Base answer templates (one generic answer per category to keep things concise)
answers = {
    "Bleeding and Wounds": "Call emergency services if bleeding is severe. Apply firm, direct pressure with a clean cloth, elevate the wound, and keep pressure until help arrives.",
    "Burns and Scalds": "Remove the person from the heat source. Cool the burn under cool water for at least 10 minutes, cover with a clean dressing, and seek medical help for severe burns.",
    "Head Injuries": "Call 911 for serious head injuries. Keep the person still with their head and neck aligned. Apply light pressure to bleeding wounds and monitor breathing.",
    "Fractures and Sprains": "Immobilize the injured area, apply a splint if trained, and use an ice pack to reduce swelling while waiting for medical care.",
    "Fainting and Unconsciousness": "Lay the person flat, elevate their legs, and check breathing. If unresponsive for more than a minute, call 911.",
    "Breathing Difficulties": "Help the person sit upright, loosen tight clothing, and call 911 if breathing does not improve rapidly.",
    "Chest Pain and Heart Attack": "Call 911 immediately, help the person rest, chew an aspirin if not allergic, and be ready to perform CPR.",
    "Heatstroke and Hypothermia": "Move to a safe environment. For heatstroke, rapidly cool the person with cool water and call 911. For hypothermia, warm gently and seek medical help.",
    "Poisoning": "Call Poison Control (800-222-1222) or 911. Do not induce vomiting unless instructed by professionals.",
    "Insect Bites and Stings": "Remove the stinger, wash the area, apply a cold compress, and watch for allergic reactions.",
    "Fever and Illness": "Encourage rest, fluids, and give an appropriate fever reducer. Seek medical advice if high fever persists.",
    "Electrical Injuries": "Turn off the power source or move it away with a non-conductor, call 911, and start CPR if needed.",
    "Choking": "Perform abdominal thrusts (Heimlich) until the object is expelled or the person becomes unconscious; then start CPR.",
    "Stroke": "Remember FAST: Face drooping, Arm weakness, Speech difficulty—Time to call 911 immediately.",
    "Seizures": "Do not restrain. Clear the area of hazards, cushion the head, and roll the person onto their side after convulsions.",
    "Minor Injuries (Cuts, Scrapes, Bruises)": "Clean the wound with running water, apply antibiotic ointment, and cover with a sterile bandage.",
    "Allergic Reactions (Anaphylaxis)": "Call 911 and use an epinephrine auto-injector if available. Keep the person lying down with legs raised.",
    "Heat Exhaustion": "Move to a cool place, loosen clothing, give cool fluids, and apply cool compresses.",
    "Frostbite": "Warm the affected area gradually using warm water (not hot) and protect skin while seeking medical evaluation.",
    "Snake Bites": "Keep the person still, position bite below heart level, remove tight items, and call 911 immediately.",
}

# Question templates for each category
question_templates = {
    "Bleeding and Wounds": [
        "How do I stop {}?",
        "What should I do if someone has {}?",
    ],
    "Burns and Scalds": [
        "How should I treat {}?",
        "What is the first aid for {}?",
    ],
    "Head Injuries": [
        "What first aid should I give for {}?",
        "How do I help someone with {}?",
    ],
    "Fractures and Sprains": [
        "What are the steps for {}?",
        "How can I manage {} before help arrives?",
    ],
    "Fainting and Unconsciousness": [
        "What should I do when {}?",
        "How do I respond to {}?",
    ],
    "Breathing Difficulties": [
        "How can I help someone {}?",
        "What should I do if a person {}?",
    ],
    "Chest Pain and Heart Attack": [
        "What should I do if someone {}?",
        "How do I respond to {}?",
    ],
    "Heatstroke and Hypothermia": [
        "What are the first aid steps for {}?",
        "How do I treat {}?",
    ],
    "Poisoning": [
        "What should I do if {}?",
        "How do I respond when {}?",
    ],
    "Insect Bites and Stings": [
        "How do I treat {}?",
        "What is the best way to manage {}?",
    ],
    "Fever and Illness": [
        "How do I reduce {}?",
        "What should I do about {}?",
    ],
    "Electrical Injuries": [
        "How should I respond to {}?",
        "What are the immediate steps for {}?",
    ],
    "Choking": [
        "How do I help someone who is {}?",
        "What is the first aid for {}?",
    ],
    "Stroke": [
        "What should I do if someone shows {}?",
        "How do I respond to {}?",
    ],
    "Seizures": [
        "How can I help a person who is {}?",
        "What should I do during {}?",
    ],
    "Minor Injuries (Cuts, Scrapes, Bruises)": [
        "How do I care for {}?",
        "What is the first aid for {}?",
    ],
    "Allergic Reactions (Anaphylaxis)": [
        "How do I handle {}?",
        "What should I do when {}?",
    ],
    "Heat Exhaustion": [
        "What are the first aid steps for {}?",
        "How should I treat {}?",
    ],
    "Frostbite": [
        "How can I manage {}?",
        "What should I do about {}?",
    ],
    "Snake Bites": [
        "What is the first aid for {}?",
        "How do I respond to {}?",
    ],
}

# Phrase fragments per category for substitution
phrases = {
    "Bleeding and Wounds": ["heavy bleeding", "a deep cut", "a bleeding wound", "bleeding from the arm"],
    "Burns and Scalds": ["a severe burn", "a minor burn on my hand", "a chemical burn", "a scald"],
    "Head Injuries": ["a serious head injury", "a concussion", "a bump on the head", "head trauma"],
    "Fractures and Sprains": ["a broken leg", "a sprained ankle", "a fractured wrist", "a broken arm"],
    "Fainting and Unconsciousness": ["someone faints", "a person collapses", "an unconscious person", "someone loses consciousness"],
    "Breathing Difficulties": ["having trouble breathing", "experiencing shortness of breath", "having an asthma attack", "struggling to breathe"],
    "Chest Pain and Heart Attack": ["severe chest pain", "a possible heart attack", "heart attack symptoms", "chest discomfort"],
    "Heatstroke and Hypothermia": ["heatstroke", "hypothermia", "overheating", "extreme cold exposure"],
    "Poisoning": ["a child swallowed poison", "accidental poisoning", "ingested household chemicals", "took too many pills"],
    "Insect Bites and Stings": ["a bee sting", "multiple wasp stings", "a spider bite", "a mosquito bite that swelled"],
    "Fever and Illness": ["a high fever", "persistent fever", "flu-like symptoms", "an unexplained fever"],
    "Electrical Injuries": ["an electrical shock", "electrocution", "electric burn", "lightning strike"],
    "Choking": ["choking", "an airway obstruction", "food stuck in throat", "someone choking on candy"],
    "Stroke": ["stroke symptoms", "facial drooping", "slurred speech", "arm weakness"],
    "Seizures": ["a seizure", "convulsions", "an epileptic fit", "someone shaking uncontrollably"],
    "Minor Injuries (Cuts, Scrapes, Bruises)": ["a small cut", "a scrape", "a bruise on my arm", "a scratched knee"],
    "Allergic Reactions (Anaphylaxis)": ["a severe allergic reaction", "anaphylaxis", "a peanut allergy reaction", "bee sting allergy"],
    "Heat Exhaustion": ["heat exhaustion", "overheating while working", "dehydration in hot weather", "fatigue from heat"],
    "Frostbite": ["frostbite on fingers", "frostbite on toes", "frozen skin patches", "frostbitten nose"],
    "Snake Bites": ["a venomous snake bite", "a rattlesnake bite", "a snake bite on the leg", "cobra bite"],
}

def make_entries(split_name):
    records = []
    for category in categories:
        for i in range(50):  # 50 entries per category
            phrase = random.choice(phrases[category])
            template = random.choice(question_templates[category])
            question = template.format(phrase)
            answer = answers[category]
            records.append({
                "category": category,
                "question": question,
                "answer": answer,
                "source_url": category_urls[category]
            })
    # Shuffle to mix categories
    random.shuffle(records)
    df = pd.DataFrame(records)
    return df

# Generate training and validation datasets
train_df = make_entries("train")
val_df = make_entries("validation")

# Save to CSV and JSONL
train_csv_path = "./firstaid_train.csv"
train_json_path = "./irstaid_train.jsonl"
val_csv_path = "./firstaid_val.csv"
val_json_path = "./firstaid_val.jsonl"

train_df.to_csv(train_csv_path, index=False, encoding="utf-8")
train_df.to_json(train_json_path, orient="records", lines=True, force_ascii=False)

val_df.to_csv(val_csv_path, index=False, encoding="utf-8")
val_df.to_json(val_json_path, orient="records", lines=True, force_ascii=False)

(train_csv_path, train_json_path, val_csv_path, val_json_path)
