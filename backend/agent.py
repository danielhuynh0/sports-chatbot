import openai

categories = [
    "fetch game results",
    "fetch player stats",
    "fetch team stats",
    "fetch player news",
    "fetch team news",
    "predict game",
    "predict player performance",
    "predict team performance",
]

def categorize_action(message):
    prompt = f"Categorize the following message into one of the categories, reflecting the intent of the message: {categories}\nMessage: {message}\nCategory:"
    
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=10,
        n=1,
        stop=None,
        temperature=0.5,
    )

    category = response.choices[0].text.strip()
    return category

def fetch_game_results(message):
    # fetch game results
    pass

def fetch_player_stats(message):
    # fetch player stats
    pass

def fetch_team_stats(message):
    # fetch team stats
    pass