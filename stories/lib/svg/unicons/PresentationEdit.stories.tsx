import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PresentationEdit, PresentationEditPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PresentationEdit",
  component: PresentationEdit,
} as ComponentMeta<typeof PresentationEdit>;

const Template: ComponentStory<typeof PresentationEdit> = (
  args: PresentationEditPropsI
) => (
  <x.div display="flex" gap="20px">
    <PresentationEdit {...args} />
    <PresentationEdit {...args} fill="red.500" />
    <PresentationEdit {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
