using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using suncoastoverflow.Models;

namespace suncoastoverflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController
  {
    private DatabaseContext _context;

    public SearchController(DatabaseContext context)
    {
      this._context = context;
    }

    [HttpGet("questions")]
    public async Task<List<Question>> SearchQuestions([FromQuery] string searchTerm)
    {
      var results = _context
      .QuestionsTable
      .Where(w => w.QuestionTitle.ToLower().Contains(searchTerm.ToLower()));
      return await results.ToListAsync();
    }
  }
}