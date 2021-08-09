import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UserLocation, UserLocationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserLocation",
  component: UserLocation,
} as ComponentMeta<typeof UserLocation>;

const Template: ComponentStory<typeof UserLocation> = (
  args: UserLocationPropsI
) => (
  <x.div display="flex" gap="20px">
    <UserLocation {...args} />
    <UserLocation {...args} fill="red.500" />
    <UserLocation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
