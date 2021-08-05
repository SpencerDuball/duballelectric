import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PathfinderUnite, PathfinderUnitePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PathfinderUnite",
  component: PathfinderUnite,
} as ComponentMeta<typeof PathfinderUnite>;

const Template: ComponentStory<typeof PathfinderUnite> = (
  args: PathfinderUnitePropsI
) => (
  <x.div display="flex" gap="20px">
    <PathfinderUnite {...args} />
    <PathfinderUnite {...args} fill="red.500" />
    <PathfinderUnite {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
