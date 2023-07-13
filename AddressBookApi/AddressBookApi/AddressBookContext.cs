using AddressBookApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AddressBookApi
{
    public class AddressBookContext : DbContext
    {
        public AddressBookContext(DbContextOptions<AddressBookContext> options)
        : base(options)
        {
        }
        public DbSet<Contact> Contacts { get; set; } = null!;
    }
}
