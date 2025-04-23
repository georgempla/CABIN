ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "thermal:insolator",
            "ingredient": {
              "item": "biomesoplenty:orange_cosmos"
            },
            "result": [
              {
                "item": "biomesoplenty:orange_cosmos",
                "chance": 2
              }
            ],
            "experience": 0
          }
    )
})