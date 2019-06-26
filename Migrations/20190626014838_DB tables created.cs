using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class DBtablescreated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "QuestionsTable",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    QuestionTitle = table.Column<string>(nullable: true),
                    QuestionBody = table.Column<string>(nullable: true),
                    QuestionVote = table.Column<int>(nullable: false),
                    Answered = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuestionsTable", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AnswersTable",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    AnswerBody = table.Column<string>(nullable: true),
                    AnswerVote = table.Column<int>(nullable: false),
                    QuestionID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnswersTable", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AnswersTable_QuestionsTable_QuestionID",
                        column: x => x.QuestionID,
                        principalTable: "QuestionsTable",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnswersTable_QuestionID",
                table: "AnswersTable",
                column: "QuestionID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnswersTable");

            migrationBuilder.DropTable(
                name: "QuestionsTable");
        }
    }
}
