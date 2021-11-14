import { Rest } from "./rest/Rest";
import { terminal } from "./terminal/Terminal";

terminal.log("Hello");
terminal.error("This is an error");
terminal.warning("This is a warn");
terminal.success("Success");

const rest = new Rest({
	port: 8080,
});

rest.on("get", "/", (conn) => {
	console.log("New request");
});

rest.start().then((port) => {
	terminal.log("Server running at " + port);
});
