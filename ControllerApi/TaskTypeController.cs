using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Planner.ControllerApi
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskTypeController : ControllerBase
    {
        public PlannerContext _context;

        public TaskTypeController(PlannerContext context)
        {
            _context = context;
        }

        // POST: api/PostTask
        [HttpPost]
        public async Task<IActionResult> TaskType([FromBody] TaskType taskType)
        {

            _context.TaskType.Add(taskType);

            await _context.SaveChangesAsync();

            return Ok(taskType);
        }

    }
}
