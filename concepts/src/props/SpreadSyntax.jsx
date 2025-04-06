function MyProfile() {
  const person = {
    name: "Jane Doe",
    imageUrl: "https://i.imgur.com/1bX5QH6.jpg",
  };
  return (
    <>
      <MyCard person={person} size="150px" isSepia={true} thickBorder={true} />
    </>
  );
}
export default MyProfile;

function MyCard(p) {
  // Forward all props to Avatar
  return (
    <>
      <div className="card">
        <MyAvatar {...p} />
        <h2>{p.person.name}</h2>
      </div>
    </>
  );
}

function MyAvatar({ person, size, isSepia, thickBorder }) {
  const styles = {
    width: size,
    height: size,
    borderRadius: "50%",
    border: thickBorder ? "5px solid black" : "1px solid gray",
    filter: isSepia ? "sepia(1)" : "none",
  };

  return <img src={person.imageUrl} alt={person.name} style={styles} />;
}
