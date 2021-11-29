

//const  argv  = require("yargs")
const yargs = require("yargs")

const {Movie , movieArr} = require("./utils")

const app = (args) =>{
    switch(process.argv[2]){
        case "add":
            const movie = new Movie(args.title, args.actor, args.year)
            movie.add()
            console.log(yargs.argv)
            break;
        case "add multi":
            const movie1 = new Movie(args.title1, args.actor1, args.year1)
            const movie2 = new Movie(args.title2, args.actor2, args.year2)
            movie1.add();
            movie2.add();
            console.log(movieArr)
            break;
            
        default:
            console.log("incorrect command")
            break;
            
    }
}

app(yargs.argv);