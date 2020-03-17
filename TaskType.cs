using System;
using System.Collections.Generic;

namespace Planner
{
    public partial class TaskType
    {
        public TaskType()
        {
            Task = new HashSet<Task>();
        }

        public int TypeId { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }

        public virtual ICollection<Task> Task { get; set; }
    }
}
