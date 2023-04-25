# mycli
Language Translator CLI

## Usage

```
% mycli --help   
mycli <command>

Commands:
  mycli asciiart   generates ascii art
  mycli translate  translates a sentence to specific language

Options:
  -h, --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]

```

<br>

## Installation

1. Clone the repository and then navigate to it.
2. Run ```npm install``` to install the dependencies.
3. Run ```npm install -g .``` to install the CLI. <br>

> :warning: **This might cause an error** which can be resolved easily by using ```sudo``` with the command, **however**, using ```sudo``` with ```npm``` is **not recommended** because it might cause permission issues later. So instead change the permissions to the CLI using the below command.

```
sudo chmod 775 /usr/local/bin/mycli
```

4. Now you are good to go and can use the CLI globally!

Type ```mycli``` or ```mycli --help``` to get started.

<br>
