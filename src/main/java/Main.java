import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        staticFileLocation("/public");

        get("/", (request, response) -> {
            response.redirect("/index.html");
            return null;
        });
        get("/popcorn", (request, response) -> {
            response.type("application/json");
            return "{\n" +
                    "  \"people\" : [\n" +
                    "    {\"name\" : \"Zech\", \"city\" : \"Whitmore\"},\n" +
                    "    {\"name\" : \"Jake\", \"city\" : \"Saratoga Springs\"},\n" +
                    "    {\"name\" : \"Kym\", \"city\" : \"Kailua-Kona\"},\n" +
                    "    {\"name\" : \"Joan\", \"city\" : \"Chicago\"},\n" +
                    "    {\"name\" : \"Lori\", \"city\" : \"Miranar\"},\n" +
                    "    {\"name\" : \"Manny\", \"city\" : \"Santa Anna\"},\n" +
                    "    {\"name\" : \"Ted\", \"city\" : \"Chicago\"},\n" +
                    "    {\"name\" : \"Scott\", \"city\" : \"Fridley\"},\n" +
                    "    {\"name\" : \"Mark\", \"city\" : \"Cooperstown\"},\n" +
                    "    {\"name\" : \"Koddie\", \"city\" : \"Hexley\"}\n" +
                    "  ]\n" +
                    "}";
        });
    }
}
