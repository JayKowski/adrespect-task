// C R E A T E  N E W  E L E M E N T S
const Element = function(element, className, attributes) {
    this.element = document.createElement(element)
    this.element.className = className ? className : '';
    
    attributes && attributes.forEach(att => {
        this.element.setAttribute(`${att.name}`, `${att.value}`)
    })

    return this.element
}

const images = [
    {
        "full": "https://images.unsplash.com/photo-1585548807335-e0bfa52ac220?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1585548807335-e0bfa52ac220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1585548807335-e0bfa52ac220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "green palm tree near white wall"
    },
    {
        "full": "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "white table with brown wicker chair beside plants"
    },
    {
        "full": "https://images.unsplash.com/photo-1470259478948-d5605cd2fe53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwzfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1470259478948-d5605cd2fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwzfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1470259478948-d5605cd2fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwzfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "white flowers beside house"
    },
    {
        "full": "https://images.unsplash.com/photo-1616018659312-49eec261521a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw0fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1616018659312-49eec261521a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw0fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1616018659312-49eec261521a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw0fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "gray concrete pathway between green trees during daytime"
    },
    {
        "full": "https://images.unsplash.com/photo-1567131249273-90a34765c19e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw1fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1567131249273-90a34765c19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw1fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1567131249273-90a34765c19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw1fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "lined assorted-colored flowers"
    },
    {
        "full": "https://images.unsplash.com/photo-1533391120950-2d65c72e5969?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw2fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1533391120950-2d65c72e5969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw2fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1533391120950-2d65c72e5969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw2fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "gray table with chair near trees"
    },
    {
        "full": "https://images.unsplash.com/photo-1532332693957-cf4ff3a2eaaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw3fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1532332693957-cf4ff3a2eaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw3fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1532332693957-cf4ff3a2eaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw3fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "green plant on brown pot"
    },
    {
        "full": "https://images.unsplash.com/photo-1552274229-96d9de3ebd7a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw4fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1552274229-96d9de3ebd7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw4fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1552274229-96d9de3ebd7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw4fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "potless plant on wooden porch"
    },
    {
        "full": "https://images.unsplash.com/photo-1623625434531-d130448273c1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw5fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1623625434531-d130448273c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw5fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1623625434531-d130448273c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw5fHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjcxMjAxNHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "brown wicker chairs and table"
    },
    {
        "full": "https://images.unsplash.com/photo-1446071103084-c257b5f70672?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxMHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1446071103084-c257b5f70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxMHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1446071103084-c257b5f70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxMHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "top view of green succulent plants"
    },
    {
        "full": "https://images.unsplash.com/photo-1562999116-a59068aca59b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxMXx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1562999116-a59068aca59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxMXx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1562999116-a59068aca59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxMXx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "brown concrete building during daytime"
    },
    {
        "full": "https://images.unsplash.com/photo-1611299065064-0a0edc037dba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxMnx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1611299065064-0a0edc037dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxMnx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1611299065064-0a0edc037dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxMnx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "green and red plant on red and white ceramic floor tiles"
    },
    {
        "full": "https://images.unsplash.com/photo-1467970767472-2488be1b8362?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxM3x8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1467970767472-2488be1b8362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxM3x8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1467970767472-2488be1b8362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxM3x8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "red flower on pot surrounded by plants"
    },
    {
        "full": "https://images.unsplash.com/photo-1544590795-d097c4fe8e3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxNHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1544590795-d097c4fe8e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxNHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1544590795-d097c4fe8e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxNHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "water fountain near trees and building"
    },
    {
        "full": "https://images.unsplash.com/photo-1616281677557-a40d9d9ece5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxNXx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1616281677557-a40d9d9ece5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxNXx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1616281677557-a40d9d9ece5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxNXx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "brown wooden bench near swimming pool during daytime"
    },
    {
        "full": "https://images.unsplash.com/photo-1539145632639-c13729854e15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxNnx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1539145632639-c13729854e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxNnx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1539145632639-c13729854e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxNnx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "trees under building inside"
    },
    {
        "full": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxN3x8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxN3x8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxN3x8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "succulent plant lot"
    },
    {
        "full": "https://images.unsplash.com/photo-1585076491343-592f07930a99?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxOHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1585076491343-592f07930a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxOHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1585076491343-592f07930a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxOHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "green grass field with fountain during daytime"
    },
    {
        "full": "https://images.unsplash.com/photo-1602023039928-7af5a2f000fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxOXx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1602023039928-7af5a2f000fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxOXx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1602023039928-7af5a2f000fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwxOXx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "gray plastic armchair on green grass"
    },
    {
        "full": "https://images.unsplash.com/photo-1612409750070-73fc2e395cb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyMHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1612409750070-73fc2e395cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyMHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1612409750070-73fc2e395cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyMHx8Z2FyZGVuX2Rlc2lnbnxlbnwwfHx8fDE2OTI3MTIwMTR8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "green and white tiled floor"
    }
]

// 

const appendImages = (imageInfo, parentElement) => {
    // C R E A T E  I M G  E L E M E N T S
    const imageContainers = imageInfo.map(i => new Element('div', 'grid-image inline max-w-[35%] max-[680px]:min-w-[20%]')); // max-w-[25%] max-w-[35%]
    const imageElements = imageInfo.map(img => new Element('img', 'inline max-h-[90%] max-[680px]:w-[125%]', [{name: 'src', value: img.regular}, {name: 'alt', value: img.description}])) // max-h-[90%]

    // C L E A R  P A R E N T  E L E M E N T
    Array.from(parentElement.children).forEach(child => child.remove())

    // A P P E N D  E L E M E N T S
    imageContainers.forEach(imgCont => parentElement.appendChild(imgCont))
    imageContainers.forEach((imgCont, val) => imgCont.appendChild(imageElements[val]))

    // R E G E N E R A T E  M A C Y  O B J E C T
    const macyInstance = new Macy({
        container: 'div.gallery-div > div.images-grid',
        margin: 43,
        columns: 3,
        berakAt: {
            800: {
                margin: {
                    x: 2,
                    y:2,
                },
                columns: 3,
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let imagesData;
    const imagesArrayOne = images.slice(0, 10);
    const imagesArrayTwo = images.slice(10, 20);

    imagesData = imagesArrayOne;

    const galleryDiv = document.querySelector('div.gallery-div > div.images-grid');

    appendImages(imagesArrayOne, galleryDiv)

    // grab more photos button
    const morePhotosBtn = document.querySelector('button#more-photos-btn');

    // T R A C K  A P P E N D I N G  C Y C L E S
    let appended = false;
    
    // Event listener to append additional photos to gallery
    morePhotosBtn.addEventListener('click', () => {
        if(appended) {
            appendImages(imagesArrayOne, galleryDiv);
            const imagesGradient = document.querySelector('body .layout-separator');
            const propToAdd = 'linear-gradient(360deg, #DCC1AB 0%, rgba(214, 183, 158, 0.00) 100%)';
            morePhotosBtn.innerHTML = `Rozwiń <img class="inline rounded-[12.5rem] duration-700" src="./images/arrow-down-black.png" alt="">`;
            imagesGradient.style.setProperty('--before-background', propToAdd)
        } else {
            appendImages([...imagesArrayOne, ...imagesArrayTwo], galleryDiv);
            const imagesGradient = document.querySelector('body .layout-separator');
            morePhotosBtn.innerHTML = `Zamknąć <img class="inline rounded-[12.5rem] rotate-180 duration-700" src="./images/arrow-down-black.png" alt="">`;
            imagesGradient.style.setProperty('--before-background', 'transparent');
        }
        appended = !appended
    })
})
