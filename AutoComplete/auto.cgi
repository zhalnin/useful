#!/usr/bin/perl
use CGI qw(:standard);

# Извлечение из строки входящего запроса параметра 'q'
my $query = new CGI();

@values = split(/&/,$ENV{'QUERY_STRING'});
foreach $i (@values) {
    ($varname, $mydata) = split(/=/,$i);
    
} 


# Наша ограниченная "база данных" содержит пять пользователей,
# из пользовательские и полные имена
my @data = (
    {
        user => "bradly",
        name => "Bradly S"
    },
    {
        user => "jason",
        name => "Jason S"
    },
    {
        user => "john",
        name => "John R"
    },
    {
        user => "josh",
        name => "Josh K"
    },
    {
        user => "julia",
        name => "Julia W"
    }
);

# Обеспечение выдачи правильного HTML-заголовка
print "Content-type: text/html\n\n";
# "Поиск" по данным
foreach my $row (@data){

    # Поиск пользователей, соответствующих нашему аргументу
    # поиска автозаполнения
    if( $row->{user} =~ /$mydata/i || $row->{name} =~ /$mydata/i ){

        # Если пользователь соответсвует условию, выдача
        # необходимого HTML
        print qq~<li id="$row->{user}">
            <img src="icons/$row->{user}_icon.jpg"\>
            <div>
                <strong>$row->{user}</strong> ($row->{name})
            </div>
        </li>~;
    }
}