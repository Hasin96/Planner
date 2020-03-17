using System;
using System.Collections.Generic;

namespace Planner
{
    public partial class Task
    {
        public int TaskId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public int TypeId { get; set; }

        public virtual TaskType Type { get; set; }
    }
}
