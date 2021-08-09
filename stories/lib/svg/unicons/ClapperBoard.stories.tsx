import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClapperBoard, ClapperBoardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClapperBoard",
  component: ClapperBoard,
} as ComponentMeta<typeof ClapperBoard>;

const Template: ComponentStory<typeof ClapperBoard> = (
  args: ClapperBoardPropsI
) => (
  <x.div display="flex" gap="20px">
    <ClapperBoard {...args} />
    <ClapperBoard {...args} fill="red.500" />
    <ClapperBoard {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
