package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strings"
)

var invalidEntryCounter = 0

func main() {
	gameOver := false
	scoreboard := [3]int{0, 0, 0}
	reader := bufio.NewReader(os.Stdin)

	for !gameOver {
		fmt.Print("Choose Rock, Paper or Scissors: ")

		userInput, err := reader.ReadString('\n')
		userInput = strings.ToLower(strings.TrimSpace(userInput))

		if err != nil {
			fmt.Println("Error reading input:", err)
			os.Exit(1)
		}

		type Option int

		const (
			ROCK Option = iota
			PAPER
			SCISSORS
		)

		var option Option

		switch userInput {
		case "rock":
			option = ROCK
		case "paper":
			option = PAPER
			fmt.Println("Hmm")
		case "scissors":
			option = SCISSORS
			fmt.Println("Herer")
		default:
			fmt.Println("You have chosen an option that is invalid.")
			invalidEntryCounter++
			if invalidEntryCounter == 3 {
				fmt.Println("Too many invalid entries. Try again next time.")
				os.Exit(1)
			}
			main()
		}

		cpuOption := Option(rand.Intn(3))
		var humanReadableCpuOption string

		if cpuOption == ROCK {
			humanReadableCpuOption = "rock"
		} else if cpuOption == PAPER {
			humanReadableCpuOption = "paper"
		} else {
			humanReadableCpuOption = "scissors"
		}

		fmt.Printf("You have chosen: %s!\n", userInput)
		fmt.Printf("The cpu has picked: %s!\n", humanReadableCpuOption)

		if option == cpuOption {
			scoreboard[2]++
		} else if option == 0 && cpuOption == 2 || option < cpuOption {
			scoreboard[1]++
		} else {
			scoreboard[0]++
		}

		fmt.Printf("The scoreboard is now: %v!\n", scoreboard)

		if scoreboard[0] > 1 {
			fmt.Println("You have won!")
			gameOver = true
		} else if scoreboard[1] > 1 {
			fmt.Println("You have lost.. try again next time")
			gameOver = true
		}
	}
	fmt.Println("Would you like to play again?")
	fmt.Printf("Yes/No?: ")

	playAgain, err := reader.ReadString('\n')

	if err != nil {
		fmt.Println("An error has occurred trying to get the input")
		os.Exit(1)
	}

	if strings.ToLower(strings.TrimSpace(playAgain)) == "yes" {
		main()
	} else {
		os.Exit(1)
	}
}
