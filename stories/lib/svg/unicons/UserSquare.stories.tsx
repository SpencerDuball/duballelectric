import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UserSquare, UserSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserSquare",
  component: UserSquare,
} as ComponentMeta<typeof UserSquare>;

const Template: ComponentStory<typeof UserSquare> = (
  args: UserSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <UserSquare {...args} />
    <UserSquare {...args} fill="red.500" />
    <UserSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
