using Microsoft.EntityFrameworkCore.Migrations;

namespace cakeworld.Migrations
{
    public partial class inte : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Passwerd",
                table: "Sellers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RePasswerd",
                table: "Sellers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "Buyers",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Passwerd",
                table: "Buyers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RePasswerd",
                table: "Buyers",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Passwerd",
                table: "Sellers");

            migrationBuilder.DropColumn(
                name: "RePasswerd",
                table: "Sellers");

            migrationBuilder.DropColumn(
                name: "Passwerd",
                table: "Buyers");

            migrationBuilder.DropColumn(
                name: "RePasswerd",
                table: "Buyers");

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "Buyers",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
