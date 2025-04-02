import { MovieType } from "../../types/types";

interface MoviesItemProps {
  movie: MovieType;
}

export const MoviesItem = (props: MoviesItemProps) => {
  const {
    movie: { title, body, image },
  } = props;

  // const hendleDelete = () => {
  //     mutation.mutate(String(id));
  // };

  return (
    <div className="bg-purple-600 p-3 min-h-[320px] rounded-md shadow-md shadow-purple-700">
      <div className="text-xl mb-4 h-24 ">{title}</div>
      <div className="relative w-full pt-[150%] mb-4">
        <img
          className="absolute top-0 left-0 object-cover h-full w-full block"
          src={image}
          alt=""
        />
      </div>
      <div>{body}</div>
      {/* <Button onClick={hendleDelete} variant='danger'>
                Delete
            </Button> */}
    </div>
  );
};
