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
    public class TaskController : ControllerBase
    {

        public PlannerContext _context;

        public TaskController(PlannerContext context)
        {
            _context = context;
        }

        // POST: api/PostTask
        [HttpPost]
        public async Task<ActionResult<Task>> PostTask(Task task)
        {

            _context.Task.Add(task);

            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}